import WidgetAd from "./WidgetAd";
import WidgetCategory from "./WidgetCategory";
import WidgetInstagramPost from "./WidgetInstagramPost";
import WidgetNewsletter from "./WidgetNewsletter";
import WidgetPostList from "./WidgetPostList";
import WidgetSearch from "./WidgetSearch";
import WidgetSocialShare from "./WidgetSocialShare";
import WidgetTags from "./WidgetTags";

const SidebarTwo = ({ dataPost, tagData }) => {
  return (
    <div className="sidebar-inner">
      <WidgetCategory catData={dataPost} />
      <WidgetTags postTag={tagData}/>
    </div>
  );
};

export default SidebarTwo;
