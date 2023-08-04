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

const Blog = ({post}: any) => {
  const {t: commonT} = useTranslation("common");
  const {t: blogT} = useTranslation("blog_page");
  const {t: singleBlogT} = useTranslation("blog_page", {
    keyPrefix: "single",
  });
  const similarTitle = singleBlogT("similar");
  const {acf} = post;
  const similars = post.similars as IPost[];
  const tableContent: any[] = [];
  const sectionContents: any[] = [];
  let types: any = {};
  let showContentIndex = 0;
  
  if(acf?.content_item) {
    acf?.content_item?.forEach((item: any, index: number) => {
      const mainIndex = index + 1;
      tableContent.push({'title': item.title_in_table, 'id': 'content_item_' + mainIndex, type: 'item', num: mainIndex});
      sectionContents.push({
        'title': item.title,
        'html_id': 'content_item_' + mainIndex,
        type: 'item',
        num: index,
        content: item.content
      });
      if (item.content_subitem) {
        item.content_subitem.forEach((subItem: any, index: number) => {
          tableContent.push({
            'title': subItem.title,
            'id': 'content_item_' + mainIndex + '_' + (index + 1),
            type: 'subitem',
            num: mainIndex + '.' + (index + 1)
          });
          sectionContents.push({
            'title': subItem.title,
            'html_id': 'content_item_' + mainIndex + '_' + (index + 1),
            type: 'subitem',
            num: index,
            content: subItem.content
          });
        });
      }
    });
  }
  
  types = acf?.types;
  const title = blogT("title");

  return (
    
    <Layout t={commonT}>
      <Head>
        <title>{post.title}</title>
        <meta title={title}/>
        <link rel="canonical" href="https://gopeak.io/blog"/>
      </Head>
      <RoutingPath paths={["Home", "Blog"]}/>
      <>
        ABCDEFGH
      </>
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps(context: any) {
  const postId = context.params.id;
  console.log({postId});
  
  const translations = (await serverSideTranslations(context.locale ?? "en", [
    "common",
    "blog_page",
  ]));
  
  let post: any = {};
  
  // Fetch data from the server using postId
  // Replace this with your actual data fetching logic
  if (postId) {
    const res = await fetch(`${BACKEND_API_URL}/single/${postId}`);
    post = await res.json();
  }
  // Pass the fetched data as props to the component
  return {
    props: {
      post,
      ...translations,
    },
  };
}