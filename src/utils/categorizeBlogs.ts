import { CATEGORY_IDS } from "@/constants/siteContstantsDetails";

export default function categorizeBlogs(blogsData) {
  const categorizedBlogs = {
    [CATEGORY_IDS.HOME_PAGE_TRENDING_NEWS]: [],
    [CATEGORY_IDS.HOME_PAGE_EDITOR_PICK]: [],
    [CATEGORY_IDS.HOME_PAGE_NEWZEALAND]: [],
    [CATEGORY_IDS.HOME_PAGE_AUSTRALIA]: [],
    LABELS: [],
  };

  if (!Array.isArray(blogsData)) {
    console.error('Invalid blogsData:', blogsData);
    return categorizedBlogs;
  }

  blogsData.forEach(blog => {
    const blog_Tags = blog.blogTags || [];
    blog_Tags.forEach(tag => {
      const tagId = tag.site_tags.site_tags_id;
      const categoryBlog = tag.site_tags;

      if (Object.values(CATEGORY_IDS).includes(tagId)) {
        categorizedBlogs[tagId].push(blog);
      }

      if (categoryBlog.category === "Label") {
        if (!categorizedBlogs.LABELS.find(label => label.site_tags_id === tagId)) {
          categorizedBlogs.LABELS.push(categoryBlog);
        }
      }
    });
  });

  return categorizedBlogs;
}
