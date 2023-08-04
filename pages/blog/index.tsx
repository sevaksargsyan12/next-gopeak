import Layout from "components/shared/Layout";
import RoutingPath from "components/shared/RoutingPath";
import { GetStaticProps, GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import SearchSection from "../../components/pages/Blog/SearchSection";
import PopularArticles from "../../components/pages/Blog/PopularArticles";
import LatestArticles, {ILatestPosts} from "../../components/pages/Blog/LatestArticles";
import GetInterestingStaff from "../../components/pages/Blog/GetInterestingStaff";
import {BACKEND_API_URL} from "../../utils/api";

interface BlogProps {
  posts: any,
  latestPosts: ILatestPosts
}

const Index = ({posts, latestPosts}: BlogProps) => {
  const { t: commonT } = useTranslation("common");
  const { t: blogT } = useTranslation("blog_page");
  
  const title = blogT("title");
  
  return (
    <Layout t={commonT}>
      <Head>
        <title>{title}</title>
        <meta title={title} />
        <link rel="canonical" href="https://gopeak.io/blog" />
      </Head>
      <RoutingPath paths={["Home", "Blog"]} />
      <SearchSection/>
      <PopularArticles popularPosts={posts}/>
      <LatestArticles latestPostsData={latestPosts}/>
      <GetInterestingStaff/>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogProps> = async ({
   locale,
 }) => {
  
  const translations = (await serverSideTranslations(locale ?? "en", [
    "common",
    "blog_page",
  ]));
  
  
  const response = await fetch(`${BACKEND_API_URL}/popular-posts`);
  const articles = await response.json();
  const responseLatestPosts = await fetch(`${BACKEND_API_URL}/latest-posts?per_page=6&limit=6&offset=0`);
  const latestPosts = await responseLatestPosts.json();

  return {
    props: {
      posts: articles,
      latestPosts,
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "blog_page",
      ])),
      // Will be passed to the page component as props
    },
  };
};

export default Index;
