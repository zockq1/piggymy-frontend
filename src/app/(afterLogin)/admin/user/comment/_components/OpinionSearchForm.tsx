'use client';

import { Form, Input, Select } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import Label from '@/share/form/item/Label';
import RangePicker from '@/share/form/item/RangePicker';
import IconButton from '@/share/ui/button/IconButton';
import ContentBox from '@/share/ui/content-box/ContentBox';
import Icon from '@/share/ui/icon/Icon';
import { OpinionType } from '@/type/opinionType';
import { buildQueryString } from '@/utils/query';

interface OpinionSearchFormValue {
  range: (Dayjs | null)[];
  userNickname: string;
  userDelYn: boolean;
  opinionType: OpinionType;
}

export default function OpinionSearchForm() {
  const searchParams = useSearchParams();
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const userNickname = searchParams.get('userNickname');
  const userDelYn = searchParams.get('userDelYn');
  const opinionType = searchParams.get('opinionType');
  const router = useRouter();
  const path = usePathname();

  const handleFinish = (formValue: OpinionSearchFormValue) => {
    const isRangeSelected = !formValue.range.includes(null);
    const params = {
      start_date: isRangeSelected
        ? formValue.range[0]!.format('YYYY-MM-DD')
        : '',
      end_date: isRangeSelected ? formValue.range[1]!.format('YYYY-MM-DD') : '',
      userNickname: formValue.userNickname,
      userDelYn: formValue.userDelYn,
      opinionType: formValue.opinionType,
    };

    if (buildQueryString(params)) {
      router.replace(`${path}?${buildQueryString(params)}`);
    } else {
      router.replace(path);
    }
  };

  return (
    <ContentBox>
      <Form className={'mb-[-24px] w-full'} onFinish={handleFinish}>
        <div className={'flex w-full items-start justify-between gap-x-10'}>
          <div className={'flex gap-x-10'}>
            <RangePicker
              label={'작성 기간'}
              className={'m-0 w-[379px]'}
              name={'range'}
              initialValue={[
                startDate ? dayjs(startDate) : null,
                endDate ? dayjs(endDate) : null,
              ]}
            />
            <Form.Item
              label={<Label>작성자(닉네임)</Label>}
              name="userNickname"
              initialValue={userNickname}
            >
              <Input placeholder="내용을 입력해주세요." />
            </Form.Item>
          </div>
          <IconButton type={'submit'}>
            <Icon icon={'search'} size={18} />
          </IconButton>
        </div>
        <div className={'flex w-full items-start justify-between gap-x-10'}>
          <div className={'flex gap-x-10'}>
            <Form.Item
              label={<Label>탈퇴 여부</Label>}
              name="userDelYn"
              initialValue={userDelYn}
              className="w-[150px]"
            >
              <Select placeholder="전체">
                <Select.Option value={false}>N</Select.Option>
                <Select.Option value={true}>Y</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={<Label>구분</Label>}
              name="opinionType"
              initialValue={opinionType}
              className="w-[150px]"
            >
              <Select placeholder="전체">
                <Select.Option value={OpinionType.BAD}>별로임</Select.Option>
                <Select.Option value={OpinionType.NOT_HELPFUL}>
                  도움 안 됨
                </Select.Option>
                <Select.Option value={OpinionType.SOSO}>
                  그저 그럼
                </Select.Option>
                <Select.Option value={OpinionType.HELPFUL}>
                  도움됨
                </Select.Option>
                <Select.Option value={OpinionType.VERY_HELPFUL}>
                  매우 유익함
                </Select.Option>
                <Select.Option value={OpinionType.SUPER_HELPFUL}>
                  없어선 안됨
                </Select.Option>
              </Select>
            </Form.Item>
          </div>
        </div>
      </Form>
    </ContentBox>
  );
}
