import * as React from 'react';
import { Route, Redirect } from "react-router";
import { connect } from 'react-redux'

interface PropsType {
  isJoined: boolean,
  isAdmin: boolean,
  children: any 
}

const RequireJoin = (props: PropsType) => {
  const { isJoined } = props;

  return (
    isJoined ? (
      <Route children={props.children} />
    ) : (
      <Redirect to='/join' />
    )
  );
};

const mapStateToProps = (state: any) => ({
  isJoined: state.user.isJoined,
  // isAdmin: state.user.me.isAdmin
})

export default connect(mapStateToProps, null)(RequireJoin as any);