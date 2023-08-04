import {useTranslation} from "next-i18next";
import React, {useState} from "react";

import SearchInput from "./SearchInput";
import ApiService from "../../../../utils/api";
import {IPost} from "../LatestArticles";
import PostItem from "../PostItem";
import Loading from "../../../shared/Loading";


const SearchSection = () => {
  const {t} = useTranslation("blog_page", {
    keyPrefix: "search_section",
  });
  const placeholder = t("placeholder");
  const searchResult = t("search_result");
  const noResult = t("no_result");
  
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  
  const handleSearchText = async (text: string) => {
    setSearchText(text);
    await getPostsBySearchTerm(text);
  };
  
  const getPostsBySearchTerm = async (searchText: string) => {
    setLoading(true);
    setPosts([]);
    setTimeout(async () => {
      const postsBySearchTerm = await ApiService.getPostsByQuery(`search=${searchText}`);
      setPosts(postsBySearchTerm);
      setLoading(false);
    }, 2000);
  }
  
  return (
    <>
      <section className="pt-35 pt-sm-50 pt-md-45 pb-30 pb-sm-40 pb-md-45 col-12 m-auto search-section">
        <div className="text-center mb-26 mb-sm-42">
          <h3 className="mb-4 text-center">{t("heading")}</h3>
          <div className="d-flex justify-content-center search-input-wrapper">
            <SearchInput onSearchResult={handleSearchText} placeholder={placeholder} name="search-article"/>
          </div>
        </div>
      </section>
      {searchText ? (<section className="col-12 pb-20 m-auto mb-sm-18 mb-8 latest-articles-section position-relative">
        {loading ? (<Loading/>) : (<>
          <h3 className="main_title">
            {posts.length ? searchResult : noResult}
          </h3>
          <div className="posts-block">
            {(posts.map((post, index) => {
              return (<PostItem key={post.id} {...post} type="medium"/>)
            }))}
          </div>
        </>)}
      </section>) : null}
    </>
  );
}

export default SearchSection;