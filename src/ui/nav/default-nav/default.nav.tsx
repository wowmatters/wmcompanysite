import React from 'react';

export type DefaultNavProps = {
  /** replace this comment with prop's description for documentation */
  label?: string,
}

/** 
  * put description of DefaultNav component
  * to allow react-docgen autogenerate the documentation
*/
export const DefaultNav = ({ label }: DefaultNavProps) => {
  return <div className={""}>{ label }</div>;
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
DefaultNav.defaultProps = {
  label: 'My awesome DefaultNav component',
} as DefaultNavProps;