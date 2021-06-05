import React, { useEffect } from 'react';
import { connect } from 'dva';
interface Props {
  dispatch: any;
}
const User: React.FC<Props> = ({dispatch}) => {

  useEffect(() => {
    dispatch({
      type: 'users/_getList',
      payload: {
        page: 2
      },
      callback: (res: any) => {
        console.log(res)
      },
    })
  }, [])
  return (
    <div>
      aaa
    </div>
  )
}

export default connect()(User);