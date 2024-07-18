'use client';

import { Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

import feedbackIcon from '/public/img/Icon/Feedback.svg';
import Label from '@/share/form/item/Label';
import { useGetUserOpinions } from '@/share/query/user/useGetUserOpinions';
import ContentBox from '@/share/ui/content-box/ContentBox';
import Title from '@/share/ui/title/Title';

export default function UserOpinionList() {
  const { userId } = useParams();

  const { data } = useGetUserOpinions(+userId);
  const totalCount = data?.totalCount;

  return (
    <ContentBox className={'w-full'}>
      <div className={'flex w-full flex-col items-start'}>
        <Title>
          전체 보낸 의견 <Title.H>{totalCount}</Title.H>건
        </Title>
        <div
          className={
            'flex w-full items-start gap-3 rounded-[8px] px-[30px] py-[22px]'
          }
        >
          <div className="flex w-[55px] flex-col items-center justify-center text-xs">
            <Image
              src={feedbackIcon}
              alt="feedbackIcon"
              width={40}
              height={40}
            />
            <div className="mt-2 text-gray-3">도움됨</div>
          </div>
          <div className={'flex w-full flex-col items-start'}>
            <Form.Item label={<Label>작성일</Label>} name={'createDate'}>
              <div className={'flex w-full items-start justify-between'}>
                <i className={'flex h-8 items-center'}>
                  {dayjs().format('YYYY-MM-DD')}
                </i>
              </div>
            </Form.Item>
            <Form.Item label={null} name="textArea" className={'h-full w-full'}>
              <TextArea rows={3} placeholder={'많은 도움이 되었어요.'} />
            </Form.Item>
          </div>
        </div>
      </div>
    </ContentBox>
  );
}
