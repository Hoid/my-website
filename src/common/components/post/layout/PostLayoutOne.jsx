import Link from "next/link";
import Image from "next/image";
import { slugify } from "../../../utils";

const PostLayoutOne = ({ postData, itemShow }) => {

  const featuredPost = postData.filter(post => post.featured === true );

  return (
    <>
      {featuredPost.slice(0, itemShow).map((data) => (
        <div
          className="col-lg-6 col-xl-6 col-md-12 col-12 mt--30"
          key={data.slug}>
          <div className="content-block content-direction-column post-horizontal thumb-border-rounded">
            <div className="post-content">
              <div className="post-cat">
                <div className="post-cat-list">
                  <Link href={`/category/${slugify(data.cate)}`}>
                    <a className="hover-flip-item-wrapper">
                      <span className="hover-flip-item">
                        <span data-text={data.cate}>{data.cate}</span>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
              <h4 className="title">
                <Link href={`/post/${data.slug}`}>
                  <a>{data.title}</a>
                </Link>
              </h4>
            </div>
            {data.featureImg ? 
            <div className="post-thumbnail">
              <Link href={`/post/${data.slug}`}>
                <a>
                  <Image
                    src={data.featureImg}
                    alt={data.title}
                    height={250}
                    width={250}
                    priority={true}
                  />
                </a>
              </Link>
            </div>
            : "" }
          </div>
        </div>
      ))}
    </>
  );
};

export default PostLayoutOne;
