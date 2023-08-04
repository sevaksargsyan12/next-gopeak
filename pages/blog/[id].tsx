import React from 'react';
import Link from "next/link";
import Head from "next/head";
import {useTranslation} from "next-i18next";
import ScrollToTop from "react-scroll-to-top";

import {BACKEND_API_URL} from "../../utils/api";
import Layout from "../../components/shared/Layout";
import RoutingPath from "../../components/shared/RoutingPath";
import LatestArticles, {IPost} from "../../components/pages/Blog/LatestArticles";
import GetInterestingStaff from "../../components/pages/Blog/GetInterestingStaff";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {IconCaret} from "shared/icons/common-icons";
import PostItem from "../../components/pages/Blog/PostItem";
import {IconScrollTop} from "shared/icons/common-icons";
import LastBLock from "../../components/pages/SingleBlog/LastBLock";
import SectionFinal from "../../components/pages/SingleBlog/SectionFinal";
import SideBar from "../../components/pages/SingleBlog/SideBar";
import TableContent from "../../components/pages/SingleBlog/TableContent";
import TableTypes from "../../components/pages/SingleBlog/TableTypes";
import Image from "next/image";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";

interface BlogProps {
  posts?: any,
}

const Blog = () => {
  const {t: commonT} = useTranslation("common");
  const {t: blogT} = useTranslation("blog_page");
  
  const title = blogT("title");
  
  return (
    
    <Layout t={commonT}>
      <Head>
        <title>kokol</title>
        <meta title={title}/>
        <link rel="canonical" href="https://gopeak.io/blog"/>
      </Head>
      <RoutingPath paths={["Home", "Blog"]}/>
      <>
          <section className="pt-35 pt-sm-50 pt-md-45 pb-30 pb-sm-40 pb-md-45 col-12 m-auto">
            Post not found
          </section>
        <ScrollToTop smooth component={<IconScrollTop/>}/>
      </>
    </Layout>
  );
};

export default Blog;

export const getServerSideProps  = async (context: any) =>{
  try {
    const translations = (await serverSideTranslations(context.locale ?? "en", [
      "common",
      "blog_page",
    ]));
    
    let post: any = {};
    
    return {
      props: {
        ...translations,
      },
    };
  } catch (e) {
    console.error('Error fetching data:', e);
    return {
      props: {
        postData: null,
      },
    };
  }
}