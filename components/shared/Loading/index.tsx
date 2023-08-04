import React from 'react';
import Image from "next/image";
import {ClipLoader, MoonLoader} from "react-spinners";

// interface LoadingProps {
//   loading: boolean;
// }

const Loading = () => {
  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <ClipLoader color="#BEBEBE" loading={true} size={50} />
        <p style={{ textAlign: 'center', color: '#BEBEBE', fontSize: '12px' }}>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;