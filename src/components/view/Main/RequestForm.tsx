import * as React from 'react';
import { Form, Radio } from 'semantic-ui-react';
import { JobType } from '../../../models/jobType';

interface PropsType {

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
          <h3>課題チェック</h3>
        ) : this.state.selectedType === JobType.Question ? (
          <h3>質問</h3>
        ) : (
          <h3>その他</h3>
        )}
      </React.Fragment>
    );
  }
}


export default RequestForm;