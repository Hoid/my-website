import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { slugify } from "../../utils";


const PostSectionEight = ({ postData }) => {

	const firstPost = postData[0];

  return (
    <div className="axil-seo-post-banner seoblog-banner axil-section-gap bg-color-grey">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-12 col-12">
            <div className="content-block post-grid post-grid-large">
            {firstPost.featureImg ? 
              <div className="post-thumbnail">
                <Link href={`/post/${firstPost.slug}`}>
                  <a>
                    <Image
                      src={firstPost.featureImg}
                      alt={firstPost.title}
                      height={600}
                      width={705}
                      priority={true}
                    />
                  </a>
                </Link>
              </div>
              :""}
              <div className="post-grid-content">
                <div className="post-content">
                  <div className="post-cat">
                    <div className="post-cat-list">
                      <Link href={`/category/${slugify(firstPost.cate)}`}>
                        <a className="hover-flip-item-wrapper">
                          <span className="hover-flip-item">
                            <span data-text={firstPost.cate}>
                              {firstPost.cate}
                            </span>
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <h3 className="title">
                    <Link href={`/post/${firstPost.slug}`}>
                      <a>{firstPost.title}</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 col-12 mt_md--30 mt_sm--30">
			{postData.slice(1, 5).map((data) => (
				<div className="content-block post-medium post-medium-border" key={data.slug}>
          {data.featureImg ? 
					<div className="post-thumbnail">
					<Link href={`/post/${data.slug}`}>
					<a>
						<Image
						src={data.featureImg}
						alt={data.title}
						height={100}
						width={100}
						priority={true}
						/>
					</a>
					</Link>
				</div>
        : ""}
				<div className="post-content">
					<div className="post-cat">
						<div className="post-cat-list">
						<Link href={`/category/${slugify(data.cate)}`}>
							<a className="hover-flip-item-wrapper">
							<span className="hover-flip-item">
								<span data-text={data.cate}>
								{data.cate}
								</span>
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
				</div>
			))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionEight;
