import React, { useEffect, useState } from "react";
import { getCookie } from "@/utilities/cookie/cookie";
import * as getTestAPI from "@/services/test";
const TestComponent = () => {
  const [content,setContent]=useState<string>('')
  const token = getCookie('access_token');
   
    useEffect(() => {
    const getTest= async () => {
        const res = await getTestAPI.getTest(token);
       setContent(res);
    }
      getTest()
  },[]);
  return <div>{content}</div>;
}

export default TestComponent;
