import { Form, Input, Radio, Space } from 'antd';

import Label from './Label';

/**
 * antd form onFinish의 value 매개변수에 추가되는 값
 * @example
 *  {
 *    answer: number;
 *    option1: string;
 *    option2: string;
 *    option3: string;
 *    option4: string;
 *  }
 */
export default function ChoiceList() {
  return (
    <Form.Item
      label={<Label>4지선다형</Label>}
      name="answer"
      initialValue={1}
      rules={[{ required: true }]}
    >
      <Radio.Group>
        <Space direction="vertical">
          {[1, 2, 3, 4].map((num) => {
            return (
              <Space.Compact key={num}>
                <Radio.Button className="w-max" value={num}>
                  정답
                </Radio.Button>
                <Form.Item
                  name={`option${num}`}
                  rules={[
                    {
                      required: true,
                      message: `${num}번 선지를 작성해 주세요`,
                    },
                  ]}
                >
                  <Input className="w-[300px]" />
                </Form.Item>
              </Space.Compact>
            );
          })}
        </Space>
      </Radio.Group>
    </Form.Item>
  );
}
