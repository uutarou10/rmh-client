import * as React from 'react';
import { Form, Radio, Button } from 'semantic-ui-react';
import { JobType } from '../../../models/jobType';

interface PropsType {
  tasks: any[]
}

interface StateType {
  selectedType: JobType
}

class RequestForm extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.requestTypeHandler = this.requestTypeHandler.bind(this)
    this.state = {
      selectedType: JobType.Confirmation
    }
  }

  requestTypeHandler(jobType: JobType) {
    this.setState({
      selectedType: jobType
    });
  }

  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Field>
            <Radio
              label='課題チェック'
              name='request-type'
              checked={this.state.selectedType === JobType.Confirmation}
              onChange={e => this.requestTypeHandler(JobType.Confirmation)}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='質問'
              name='request-type'
              checked={this.state.selectedType === JobType.Question}
              onChange={e => this.requestTypeHandler(JobType.Question)}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='その他'
              name='request-type'
              checked={this.state.selectedType === JobType.Other}
              onChange={e => this.requestTypeHandler(JobType.Other)}
            />
          </Form.Field>
        </Form>
        {this.state.selectedType === JobType.Confirmation ? (
          <React.Fragment>
            <h3>課題チェック</h3>
            <Form>
              <Form.Field>
                <Form.Select
                  label='どの課題かな?'
                  options={this.props.tasks}
                />
              </Form.Field>
              <Form.Field>
                <SubmitButton />
              </Form.Field>
            </Form>
          </React.Fragment>
        ) : this.state.selectedType === JobType.Question ? (
          <React.Fragment>
            <h3>質問</h3>
            <Form>
              <Form.Field>
                <Form.TextArea
                  label='聞きたいこと(Optional)'
                />
              </Form.Field>
              <Form.Field>
                <SubmitButton />
              </Form.Field>
            </Form>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3>その他</h3>
            <Form>
              <Form.Field>
                <Form.TextArea
                  label='言いたいこと(Optional)'
                />
              </Form.Field>
              <Form.Field>
                <SubmitButton />
              </Form.Field>
            </Form>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

interface SubmitButtonProps {
  isRequesting: boolean,
  isDisable: boolean,
  onClickHandler: Function
}

const SubmitButton = (props: SubmitButtonProps) => {

  return (
    props.isRequesting ? (
      <p>hoge</p>
    ) : (
      <Button
        primary
        fluid
        disabled={props.isDisable}
        onClick={props.onClickHandler}
      >送信</Button>
    )
  )
}


export default RequestForm;