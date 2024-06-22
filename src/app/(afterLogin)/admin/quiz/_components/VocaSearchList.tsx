'use client';

import { Form } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import Image from 'next/image';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import React, {
  ChangeEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import search from '/public/img/Icon/search.png';
import Text from '@/share/form/item/Text';
import NoticeModal from '@/share/modal/NoticeModal';
import { useModal } from '@/share/modal/useModal';
import { useDeleteVocas } from '@/share/query/voca/useDeleteVocas';
import { useGetVocaListInfinite } from '@/share/query/voca/useGetVocas';
import { usePatchVocasIsUse } from '@/share/query/voca/useUpdateVoca';
import Button from '@/share/ui/button/Button';
import IconButton from '@/share/ui/button/IconButton';
import ContentBox from '@/share/ui/content-box/ContentBox';
import Dropdown from '@/share/ui/dropdown/Dropdown';
import Add from '@/share/ui/list-item/Add';
import Card from '@/share/ui/list-item/Card';
import Title from '@/share/ui/title/Title';
import { buildQueryString } from '@/share/utils/query';
import { VocaModel } from '@/type/vocaType';

interface FormExampleValue {
  range: Dayjs[];
  useYn: boolean;
  keyword: string;
}

function VocaSearchList() {
  const params = useParams();
  const router = useRouter();
  const path = usePathname();
  const pageRef = useRef(1);
  const searchParams = useSearchParams();
  const { openModal, closeModal } = useModal();

  const startDate = searchParams.get('start_date');
  const endDate = searchParams.get('end_date');
  const isUse = searchParams.get('is_use');
  const keyword = searchParams.get('keyword');

  const [selectVocaList, setSelectVocaList] = useState<VocaModel[]>([]);
  const [sortType, setSortType] = useState<'CREATED' | 'MODIFIED'>('CREATED');

  const selectVocaIds = selectVocaList.map((voca) => voca.id);
  const selectVocaIsUseValues = selectVocaList.map((voca) => voca.isUse);

  const { data, fetchNextPage, hasNextPage, refetch } = useGetVocaListInfinite({
    data: {
      page_size: 10,
      start_date: startDate!,
      end_date: endDate!,
      is_use: isUse!,
      search_keyword: keyword!,
      sort_type: sortType,
    },
  });
  const { mutate: deleteVocas } = useDeleteVocas();
  const { mutate: patchVocas } = usePatchVocasIsUse();

  const totalCount =
    !!data?.pages && data?.pages[0].data ? data?.pages[0].data.totalCount : 0;

  const vocaList = data?.pages.reduce((acc, page) => {
    if (!!page && !!page.data) {
      return [...acc, ...page.data.list];
    } else {
      return [...acc];
    }
  }, []);

  const handleFinish = (formValue: FormExampleValue) => {
    const params = {
      start_date: startDate ?? '',
      end_date: endDate ?? '',
      is_use: isUse ?? '',
      keyword: formValue.keyword ?? '',
    };

    if (buildQueryString(params)) {
      router.replace(`${path}?${buildQueryString(params)}`);
    } else {
      router.replace(`${path}`);
    }
  };

  const handleIsUseChange: MouseEventHandler = (e) => {
    e.preventDefault();

    if (
      selectVocaIsUseValues.every((value) => value) ||
      selectVocaIsUseValues.every((value) => !value)
    ) {
      openModal(
        'isUseChange',
        <NoticeModal
          message={`체크된 항목 ${selectVocaList.length}건이 있습니다.\n모두 ‘${selectVocaIsUseValues.every((value) => value) ? '미사용' : '사용'}'으로 변경하시겠습니까??`}
          onConfirm={() => {
            patchVocas({
              data: {
                vocaIds: selectVocaIds,
                isUse: !selectVocaIsUseValues.every((value) => value),
              },
            });
            setSelectVocaList([]);
            closeModal('isUseChange');
          }}
          onCancel={() => {
            closeModal('isUseChange');
          }}
        />,
        { clickableOverlay: false },
      );
    } else {
      openModal(
        'isUseChange',
        <NoticeModal
          type={'question'}
          message={'사용여부가 같은 항목들끼리만 체크해주세요.'}
          onConfirm={() => {
            closeModal('isUseChange');
          }}
        />,
        { clickableOverlay: true },
      );
    }
  };

  const handleDeleteVocas = () => {
    deleteVocas({ data: { vocaIds: selectVocaIds } });
    setSelectVocaList([]);
  };

  const toggleCheck = (voca: VocaModel) => {
    const ids = new Set(selectVocaIds);
    if (ids.has(+voca.id)) {
      setSelectVocaList((prev) => prev.filter((item) => item.id !== voca.id));
    } else {
      setSelectVocaList((prev) => [...prev, voca]);
    }
  };

  useEffect(() => {
    if (hasNextPage) {
      pageRef.current = pageRef.current + 1;
    }
  }, [hasNextPage]);

  useEffect(() => {
    refetch().then();
  }, [sortType, refetch]);

  return (
    <ContentBox className={'flex h-full items-start'}>
      <Form
        className={'flex h-full w-full flex-col gap-4'}
        onFinish={handleFinish}
      >
        <div className={'flex w-full items-start justify-between gap-x-3'}>
          <Text
            label={''}
            placeholder={'검색'}
            name={'keyword'}
            className={'w-full'}
          />
          <IconButton type={'submit'}>
            <Image src={search} alt="검색" width={18} height={18} />
          </IconButton>
        </div>
        <div className={'flex w-full items-start justify-between'}>
          <Title>
            전체 용어 <Title.H>{totalCount}</Title.H>건
          </Title>
          <Dropdown
            options={[
              { inputVal: 'CREATED', summary: '등록일' },
              { inputVal: 'MODIFIED', summary: '업데이트순' },
            ]}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setSortType(e.target.value as 'CREATED' | 'MODIFIED');
            }}
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <Button
            type="button"
            size="small"
            color="blue"
            onClick={handleIsUseChange}
            disabled={selectVocaIds.length < 1}
          >
            사용여부 일괄변경
          </Button>
          <Button
            type="button"
            size="small"
            color="blue"
            onClick={handleDeleteVocas}
          >
            삭제
          </Button>
        </div>
        {!!data && data.pages.length > 0 && (
          <div className={'relative h-full'}>
            <ul id={'list'} className={'overflow-y-auto pb-20'}>
              <InfiniteScroll
                dataLength={vocaList.length}
                next={fetchNextPage}
                hasMore={hasNextPage}
                loader={false}
                scrollableTarget={'list'}
                scrollThreshold={0.8}
                className={'flex flex-col gap-4'}
              >
                {vocaList?.map((voca: VocaModel) => {
                  return (
                    <li key={voca.id} className={'list-none'}>
                      <Card
                        id={voca.id.toString()}
                        koreanTitle={voca.koreanTitle}
                        createdDate={dayjs(voca.createdDate)}
                        isActive={voca.isUse}
                        isChecked={selectVocaList
                          .map((voca) => voca.id)
                          .includes(voca.id)}
                        route={`/admin/quiz/vocaManagement/${voca.id}`}
                        isSelected={+params.vocaId === voca.id}
                        onChangeChecked={() => toggleCheck(voca)}
                      />
                    </li>
                  );
                })}
              </InfiniteScroll>
            </ul>
            <div className={'absolute bottom-0'}>
              <Add
                type={'card'}
                isSelected={false}
                route={'/admin/quiz/vocaManagement'}
              />
            </div>
          </div>
        )}
      </Form>
    </ContentBox>
  );
}

export default VocaSearchList;
