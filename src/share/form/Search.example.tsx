import { Form } from 'antd';
import React, { useState } from 'react';

import Text from '@/share/form/item/Text';
import Button from '@/share/ui/button/IconButton';
import IconButton from '@/share/ui/button/IconButton';
import ContentBox from '@/share/ui/content-box/ContentBox';
import Icon from '@/share/ui/icon/Icon';

import Dropdown from './item/Dropdown';
import RangePicker from './item/RangePicker';

interface FormExampleValue {}

export function SearchExample() {
  return <></>;
}
function ContentSearchExample() {
  const [isExpand, setIsExpand] = useState(false);

  const handleExpand = () => {
    setIsExpand((prev) => !prev);
  };

  const handleFinish = (formValue: FormExampleValue) => {
    for (const [key, value] of Object.entries(formValue)) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div className={'bg-gray-5 p-4'}>
      <ContentBox>
        <div
          className={`${isExpand ? '' : 'mb-[-24px]'} flex w-full flex-col gap-6`}
        >
          <Form
            labelCol={{}}
            layout="horizontal"
            className="w-full"
            onFinish={handleFinish}
          >
            <div className={'flex w-full items-start justify-between gap-x-10'}>
              <RangePicker
                label={'등록일자'}
                className={'w-[379px]'}
                name={'range'}
              />
              <Text
                label={'링크 타이틀/URL'}
                placeholder={'검색'}
                name={'title'}
                className="w-[350px]"
              />
              <div className={'flex min-w-[88px] gap-4'}>
                {!isExpand && (
                  <>
                    <Button onClick={handleExpand}>
                      <Icon icon={'down'} size={18} />
                    </Button>
                    <IconButton type={'submit'}>
                      <Icon icon={'search'} size={18} />
                    </IconButton>
                  </>
                )}
              </div>
            </div>
            {isExpand && (
              <div
                className={'flex w-full items-start justify-between gap-x-10'}
              >
                <Dropdown
                  optionList={[
                    { id: 0, value: 'ALL', label: '전체' },
                    { id: 1, value: 'ARTICLE', label: '글/칼럼/뉴스레터' },
                    { id: 2, value: 'MEDIA', label: '영상 콘텐츠' },
                  ]}
                  label={'구분'}
                  placeholder={'전체'}
                  className="max-w-[180px]"
                />
                <Text
                  label={'출처'}
                  placeholder={'검색'}
                  name={'source'}
                  className="max-w-[180px]"
                />
                <Text
                  label={'등록자'}
                  placeholder={'검색'}
                  name={'author'}
                  className="max-w-[180px]"
                />
                <Text
                  label={'연결된 용어카드'}
                  placeholder={'검색'}
                  name={'word'}
                  className="max-w-[330px]"
                />
              </div>
            )}
          </Form>
          {isExpand && (
            <>
              <hr className={'w-full border-[#b5b5b5]'} />
              <div className={'flex w-full justify-center gap-2'}>
                <Button onClick={handleExpand}>
                  <Icon icon={'up'} size={18} />
                </Button>
                <Button type={'submit'}>
                  <div className={'flex items-center justify-center gap-1'}>
                    <Icon icon={'search'} size={18} />
                    검색하기
                  </div>
                </Button>
              </div>
            </>
          )}
        </div>
      </ContentBox>
    </div>
  );
}

function WordSearchExample() {
  const handleFinish = (formValue: FormExampleValue) => {
    for (const [key, value] of Object.entries(formValue)) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div className={'bg-gray-5 p-4'}>
      <ContentBox>
        <Form
          labelCol={{}}
          layout="horizontal"
          className={'mb-[-24px] w-full'}
          onFinish={handleFinish}
        >
          <div className={'flex w-full items-start justify-between gap-x-10'}>
            <div className={'flex gap-x-10'}>
              <RangePicker
                label={'등록일자'}
                className={'w-[379px]'}
                name={'range'}
              />
              <Dropdown
                optionList={[
                  { id: 0, value: 'used', label: '사용중' },
                  { id: 1, value: 'unused', label: '미사용' },
                ]}
                label={'사용여부'}
                placeholder={'전체'}
                className="max-w-[250px]"
                name={'use'}
              />
            </div>
            <IconButton type={'submit'}>
              <Icon icon={'search'} size={18} />
            </IconButton>
          </div>
        </Form>
      </ContentBox>
    </div>
  );
}

function ManagerSearchExample() {
  const [isExpand, setIsExpand] = useState(false);

  const handleExpand = () => {
    setIsExpand((prev) => !prev);
  };

  const handleFinish = (formValue: FormExampleValue) => {
    for (const [key, value] of Object.entries(formValue)) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div className={'bg-gray-5 p-4'}>
      <ContentBox>
        <div
          className={`${isExpand ? '' : 'mb-[-24px]'}  flex w-full flex-col gap-6`}
        >
          <Form
            labelCol={{}}
            layout="horizontal"
            className="w-full"
            onFinish={handleFinish}
          >
            <div className={'flex w-full items-start justify-between gap-x-10'}>
              <RangePicker
                label={'등록일자'}
                className={'w-[379px]'}
                name={'range'}
              />
              <Text
                label={'관리자명'}
                placeholder={'검색'}
                name={'title'}
                className="w-[180px]"
              />
              <Dropdown
                optionList={[
                  { id: 0, value: 'Y', label: '탈퇴' },
                  { id: 1, value: 'N', label: '탈퇴X' },
                ]}
                label={'탈퇴여부'}
                placeholder={'전체'}
                className="w-[180px]"
                name={'isSeceded'}
              />
              <div className={'flex min-w-[88px] gap-4'}>
                {!isExpand && (
                  <>
                    <Button onClick={handleExpand}>
                      <Icon icon={'down'} size={18} />
                    </Button>
                    <IconButton type={'submit'}>
                      <Icon icon={'search'} size={18} />
                    </IconButton>
                  </>
                )}
              </div>
            </div>
            {isExpand && (
              <div className={'flex w-full items-start justify-start gap-x-10'}>
                <Text
                  label={'로그인ID'}
                  placeholder={'검색'}
                  name={'id'}
                  className="max-w-[300px]"
                />
                <Text
                  label={'이메일'}
                  placeholder={'검색'}
                  name={'email'}
                  className="max-w-[600px]"
                />
              </div>
            )}
            {isExpand && (
              <div className={'flex flex-col gap-4'}>
                <hr className={'w-full border-[#b5b5b5]'} />
                <div className={'flex w-full justify-center gap-2'}>
                  <Button onClick={handleExpand}>
                    <Icon icon={'down'} size={18} />
                  </Button>
                  <Button type={'submit'}>
                    <div className={'flex items-center justify-center gap-1'}>
                      <Icon icon={'search'} size={18} />
                      검색하기
                    </div>
                  </Button>
                </div>
              </div>
            )}
          </Form>
        </div>
      </ContentBox>
    </div>
  );
}

function TextSearchExample() {
  const handleFinish = (formValue: FormExampleValue) => {
    for (const [key, value] of Object.entries(formValue)) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div className={'bg-gray-5 p-4'}>
      <ContentBox>
        <Form
          labelCol={{}}
          layout="horizontal"
          className={'mb-[-24px] w-full'}
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
              <Icon icon={'search'} size={18} />
            </IconButton>
          </div>
        </Form>
      </ContentBox>
    </div>
  );
}

SearchExample.ContentSearchExample = ContentSearchExample;
SearchExample.WordSearchExample = WordSearchExample;
SearchExample.ManagerSearchExample = ManagerSearchExample;
SearchExample.TextSearchExample = TextSearchExample;

export default SearchExample;
