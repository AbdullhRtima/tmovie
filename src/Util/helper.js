import React from 'react';
import {Spin} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const antIconHome = <LoadingOutlined style={{  position: "fixed",
    color: "#01d277",
    top: "50%",
    left: "50%",
    fontSize:"5rem",
    transform: "translate(-50%, -50%)"}} type="loading" spin />;

export const Spinner =()=> {
    return(
        <div>
            <Spin indicator={antIconHome} /> 
        </div>
    );
}
