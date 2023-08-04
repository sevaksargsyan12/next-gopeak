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
        <title>{post.title}AAAAAAAAAAAAAAA</title>
        <meta title={title}/>
        <link rel="canonical" href="https://gopeak.io/blog"/>
      </Head>
      <RoutingPath paths={["Home", "Blog"]}/>
      <>
        {(!post.id) ?
          (<section className="pt-35 pt-sm-50 pt-md-45 pb-30 pb-sm-40 pb-md-45 col-12 m-auto">
            Post not found
          </section>) : (
            <>
              <div className="pt-35 pt-sm-50 pt-md-45 pb-30 pb-sm-40 pb-md-45 col-12 m-auto single-post">
                <div className="single-post-title">
                  <h1>{post.title}</h1>
                </div>
                <div className="single-post-wrapper">
                  <section className="head-content">
                    <div className="post-date">
                      <div className="date">
                        {post.date}
                      </div>
                      <div className="read">
                        {post.readMinute}
                      </div>
                    </div>
                    {acf?.social_button?.length ? (
                      <div className="social-buttons">
                        {acf.social_button.map((socialBtn: any, index: number) => {
                          return (<Link key={index} href={socialBtn.link}>
                            <Image src={socialBtn.social_icon} alt="social"/>
                          </Link>)
                        })}
                      </div>) : null}
                    {acf?.author?.name ? <div className="author-block acf-mobile">
                        <div className="avatar-block">
                          {acf?.author?.avatar && (<div className="img">
                            <Image src={acf?.author?.avatar} alt={''}/>
                          </div>)}
                        </div>
                        <div className="link-block">
                          {acf?.author?.name && (
                            <div className="link">
                              <Link href={acf?.author?.url || '#'}>{acf?.author?.name || ''}</Link>
                            </div>)}
                          {acf?.author?.social_icon &&
                            (<div className="img">
                              <Image src={acf?.author?.social_icon } alt={''}/>
                            </div>)}
                        </div>
                        {acf?.author?.description  && <div className="content-block" dangerouslySetInnerHTML={{__html: acf?.author?.description }}></div>}
                      </div>
                      : null}
                    <div className="post-description" dangerouslySetInnerHTML={{__html: post.content}}>
                    </div>
                  </section>
                  {tableContent?.length ? <TableContent tableContent={tableContent}/> : null}
                  {types?.items?.length ? <TableTypes types={types}/> : null}
                  <section className="section-contents">
                    <div className="content">
                      {
                        sectionContents.map((item: any, index: number) => {
                          if (item.type === 'item') showContentIndex++;
                          return (<div key={index} className={`content-item ${item.type}`}>
                            {item.type === 'item' ? (<h3 id={item.html_id}>{showContentIndex}. {item.title}</h3>) : (
                              <h4 id={item.html_id}>{item.title}</h4>)}
                            <div className="content-description" dangerouslySetInnerHTML={{__html: item.content}}>
                            </div>
                          </div>)
                        })}
                    </div>
                  </section>
                  {types?.items?.length ? <section className="section-types">
                    <h3>{showContentIndex + 1}. {types.title}</h3>
                    <p>{types.small_content}</p>
                    <div className="content">
                      {
                        types?.items?.length && types.items.map((item: any, index: number) => {
                          return (
                            <div key={index} className="content-item">
                              <div className="content-item-title">
                                <span className="icon">
                                  <IconCaret/>
                                </span>
                                <h4 id={item.html_id}>{item.title}</h4>
                              </div>
                              <div className="content-item-description" dangerouslySetInnerHTML={{__html: item.content}}>
                              </div>
                            </div>)
                        })}
                      {types?.last_block && <LastBLock types={types}/>}
                    </div>
                  </section> : null}
                  {acf?.final && <SectionFinal final={acf?.final}/>}
                </div>
                <SideBar {...acf?.author} banner={acf?.banner}/>
              </div>
              <div className="similar-posts">
                <h4>{similarTitle}</h4>
                <div className="posts-block">
                  {(similars.map((post, index) => {
                    return (<PostItem key={post.id} {...post} type="medium"/>)
                  }))}
                </div>
              </div>
              <GetInterestingStaff/>
            </>
          )}
        <ScrollToTop smooth component={<IconScrollTop/>}/>
      </>
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps(context: any) {
  const postId = context.params.id;
  
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