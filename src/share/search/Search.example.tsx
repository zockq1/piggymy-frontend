import { Input } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';

import down from '/public/img/Icon/down.png';
import search from '/public/img/Icon/search.png';
import up from '/public/img/Icon/up.png';
import Button from '@/share/ui/button/IconButton';
import ContentBox from '@/share/ui/content-box/ContentBox';

import Search from './Search';

interface FormExampleValue {}

export function SearchExample() {
  return <></>;
}
function ContentSearchExample() {
  const [isExpand, setIsExpand] = useState(false);

  const handleExpand = () => {
    setIsExpand((prev) => !prev);
  };

  const handleSearch = (formValue: FormExampleValue) => {
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
          <Search>
            <div className={'flex w-full items-start justify-between gap-x-10'}>
              <Search.SearchRangePicker
                label={'등록일자'}
                className={'w-[379px]'}
              />
              <Search.SearchText
                label={'링크 타이틀/URL'}
                placeholder={'검색'}
                name={'title'}
                className="w-[350px]"
              />
              <div className={'flex min-w-[88px] gap-4'}>
                {!isExpand && (
                  <>
                    <Button onClick={handleExpand}>
                      <Image src={down} alt="검색" width={18} height={18} />
                    </Button>
                    <Button onClick={handleSearch}>
                      <div className={'flex items-center justify-center gap-1'}>
                        <Image src={search} alt="검색" width={18} height={18} />
                      </div>
                    </Button>
                  </>
                )}
              </div>
            </div>
            {isExpand && (
              <div
                className={'flex w-full items-start justify-between gap-x-10'}
              >
                <Search.SearchDropdown
                  label={'구분'}
                  placeholder={'전체'}
                  className="max-w-[180px]"
                />
                <Search.SearchText
                  label={'출처'}
                  placeholder={'검색'}
                  name={'source'}
                  className="max-w-[180px]"
                />
                <Search.SearchText
                  label={'등록자'}
                  placeholder={'검색'}
                  name={'author'}
                  className="max-w-[180px]"
                />
                <Search.SearchText
                  label={'연결된 용어카드'}
                  placeholder={'검색'}
                  name={'word'}
                  className="max-w-[330px]"
                />
              </div>
            )}
          </Search>
          {isExpand && (
            <>
              <hr className={'w-full border-[#b5b5b5]'} />
              <div className={'flex w-full justify-center gap-2'}>
                <Button onClick={handleExpand}>
                  <Image src={up} alt="검색" width={18} height={18} />
                </Button>
                <Button onClick={handleSearch}>
                  <div className={'flex items-center justify-center gap-1'}>
                    <Image src={search} alt="검색" width={18} height={18} />
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
  const handleSearch = (formValue: FormExampleValue) => {
    for (const [key, value] of Object.entries(formValue)) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div className={'bg-gray-5 p-4'}>
      <ContentBox>
        <Search className={'mb-[-24px] w-full'}>
          <div className={'flex w-full items-start justify-between gap-x-10'}>
            <div className={'flex gap-x-10'}>
              <Search.SearchRangePicker
                label={'등록일자'}
                className={'w-[379px]'}
              />
              <Search.SearchDropdown
                label={'사용여부'}
                placeholder={'전체'}
                className="max-w-[250px]"
              />
            </div>
            <Button onClick={handleSearch}>
              <div className={'flex items-center justify-center gap-1'}>
                <Image src={search} alt="검색" width={18} height={18} />
              </div>
            </Button>
          </div>
        </Search>
      </ContentBox>
    </div>
  );
}

function ManagerSearchExample() {
  const [isExpand, setIsExpand] = useState(false);

  const handleExpand = () => {
    setIsExpand((prev) => !prev);
  };

  const handleSearch = (formValue: FormExampleValue) => {
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
          <Search>
            <div className={'flex w-full items-start justify-between gap-x-10'}>
              <Search.SearchRangePicker
                label={'등록일자'}
                className={'w-[379px]'}
              />
              <Search.SearchText
                label={'관리자명'}
                placeholder={'검색'}
                name={'title'}
                className="w-[180px]"
              />
              <Search.SearchDropdown
                label={'탈퇴여부'}
                placeholder={'전체'}
                className="w-[180px]"
              />
              <div className={'flex min-w-[88px] gap-4'}>
                {!isExpand && (
                  <>
                    <Button onClick={handleExpand}>
                      <Image src={down} alt="검색" width={18} height={18} />
                    </Button>
                    <Button onClick={handleSearch}>
                      <div className={'flex items-center justify-center gap-1'}>
                        <Image src={search} alt="검색" width={18} height={18} />
                      </div>
                    </Button>
                  </>
                )}
              </div>
            </div>
            {isExpand && (
              <div className={'flex w-full items-start justify-start gap-x-10'}>
                <Search.SearchText
                  label={'로그인ID'}
                  placeholder={'검색'}
                  name={'source'}
                  className="max-w-[300px]"
                />
                <Search.SearchText
                  label={'이메일'}
                  placeholder={'검색'}
                  name={'word'}
                  className="max-w-[600px]"
                />
              </div>
            )}
          </Search>
          {isExpand && (
            <>
              <hr className={'w-full border-[#b5b5b5]'} />
              <div className={'flex w-full justify-center gap-2'}>
                <Button onClick={handleExpand}>
                  <Image src={up} alt="검색" width={18} height={18} />
                </Button>
                <Button onClick={handleSearch}>
                  <div className={'flex items-center justify-center gap-1'}>
                    <Image src={search} alt="검색" width={18} height={18} />
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

function TextSearchExample() {
  const handleSearch = (formValue: FormExampleValue) => {
    for (const [key, value] of Object.entries(formValue)) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div className={'bg-gray-5 p-4'}>
      <ContentBox>
        <Search>
          <div className={'flex w-full items-center justify-between gap-x-3'}>
            <Input placeholder="검색" className={'w-full'} />
            <Button onClick={handleSearch}>
              <Image src={search} alt="검색" width={18} height={18} />
            </Button>
          </div>
        </Search>
      </ContentBox>
    </div>
  );
}

SearchExample.ContentSearchExample = ContentSearchExample;
SearchExample.WordSearchExample = WordSearchExample;
SearchExample.ManagerSearchExample = ManagerSearchExample;
SearchExample.TextSearchExample = TextSearchExample;

export default SearchExample;
