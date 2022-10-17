import InstagramOne from "../common/components/instagram/InstagramOne";
import FooterThree from "../common/elements/footer/FooterThree";
import { getAllPosts } from '../../lib/api';
import HeaderThree from "../common/elements/header/HeaderThree";
import HeadTitle from "../common/elements/head/HeadTitle";
import { slugify, SortingByDate } from "../common/utils";
import PostSectionNine from '../common/components/post/PostSectionNine';
import CategoryListSlide from '../common/components/category/CategoryListSlide';
import PostSectionThree from '../common/components/post/PostSectionThree';
import PostSectionFour from '../common/components/post/PostSectionFour';
import PostSectionTen from '../common/components/post/PostSectionTen';
import PostSectionEleven from '../common/components/post/PostSectionEleven';

const WritingBlog = ({allPosts}) => {

  const writingPost = allPosts.filter(post => slugify(post.cate) === "writing");
  const videoPost = allPosts.filter(post => post.postFormat === "video");
  
    return ( 
        <>
        <HeadTitle pageTitle="Writing Blog"/>
        <HeaderThree postData={allPosts}/>
        <PostSectionNine postData={writingPost}/>
        <CategoryListSlide cateData={allPosts} />
        <PostSectionTen postData={allPosts} />
        <PostSectionThree postData={videoPost} heading="Featured Video"/>
        <PostSectionFour postData={writingPost} adBanner={true}/>
        <PostSectionEleven postData={allPosts}/>
        <InstagramOne parentClass="bg-color-grey"/>
        <FooterThree />
        </>
     );
}
 
export default WritingBlog;  


export async function getStaticProps() {
    const allPosts = getAllPosts([
      'postFormat',
      'title',
      'featureImg',
      'featured',
      'date',
      'slug',
      'pCate',
      'cate',
      'cate_img',
      'read_time',
    ])
    
    SortingByDate(allPosts)
    return {
      props: { allPosts }
    }
  }