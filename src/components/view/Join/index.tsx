import * as React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDraftUsername, requestJoin } from '../../../actions/join';

interface PropsType {
  draftUsername: string,
  isRequestingJoin: boolean,
  setDraftUsername: Function,
  requestJoin: Function
}

const Join = (props: PropsType) => {

  return (
    <React.Fragment>
      <h2>Join</h2>
      <p>名前を入力してください。</p>
      <Form>
        <Form.Field>
          <input
            value={props.draftUsername}
            onChange={e => props.setDraftUsername(e.target.value)}
            placeholder='Your name'
          />
        </Form.Field>
        <Form.Field>
          <Button
            disabled={props.draftUsername.length <= 0 || props.isRequestingJoin}
            fluid
            primary
            onClick={() => props.requestJoin(props.draftUsername)}
          >Join</Button>
        </Form.Field>
      </Form>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => ({
  draftUsername: state.join.draftUsername,
  isRequestingJoin: state.join.isRequestingJoin
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  setDraftUsername,
  requestJoin
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Join);