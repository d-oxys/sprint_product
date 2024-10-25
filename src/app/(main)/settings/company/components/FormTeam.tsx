import FormItem from "@root/app/components/FormItem";
import { useAppDispatch, useAppSelector } from "@root/libs/store";
import { TeamType, teamActions } from "@root/libs/store/slices/team.slice";
import {
  createTeam,
  getTeamById,
  updateTeam,
} from "@root/libs/store/thunk/team";
import { Button, Col, Form, Input, Row } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface FormTeamProps {
  id?: string;
  section_id: string;
  callback?: () => void;
}

const FormTeam = (props: FormTeamProps) => {
  const { id } = props;
  const dispatch = useAppDispatch();
  const route = useRouter();
  const [form] = Form.useForm();
  const { loading, team }: { loading: boolean; team: TeamType } =
    useAppSelector((state) => state.team);

  useEffect(() => {
    if (id) {
      dispatch(getTeamById(id));
    } else {
      dispatch(teamActions.setTeamDetail({}));
    }
  }, [id]);

  useEffect(() => {
    if (team) {
      form.setFieldValue("name", team.name);
    }
  }, [team]);

  const submitData = (values: { name: string }) => {
    if (id) {
      dispatch(
        updateTeam({
          ...values,
          section_id: props.section_id,
          id: id,
        })
      );
    } else {
      dispatch(createTeam({...values, 
        section_id: props.section_id,}));
    }
    form.resetFields();
    if (props.callback) {
      props.callback();
    }
  };

  return (
    <div className="p-2">
      <Form form={form} layout="vertical" onFinish={submitData}>
        <FormItem required label="Team Name" name="name">
          <Input />
        </FormItem>
        <Row>
          <Col span="24" className="text-end">
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default FormTeam;
