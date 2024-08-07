export interface SiteTags {
    site_tags_id: number;
    name: string;
    category: string;
    status: string;
    created_by: number | null;
    updated_by: number | null;
    created_at: string | null;
    updated_at: string | null;
    deleted_at: string | null;
}

export interface BlogSeo {
    create_seo_id: string;
    blog_sub_titles_id: string;
    name: string;
    pages_id: string;
    description: string;
    title: string;
    canonical: string;
    robots: string;
    google_site_verification: string;
    og_local: string;
    og_type: string;
    og_title: string;
    og_URL: string;
    og_site_name: string;
    image: string | null;
    alt: string | null;
    status: string;
    created_by: string;
    updated_by: string | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

export interface BlogDetail {
    blogs_details_id: number;
    blog_sub_titles_id: string;
    blog_title: string;
    blog_description: string;
    status: string;
    featured_image: string;
    created_by: string | null;
    updated_by: string | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}



export interface BlogTags {
    blogs_tags_id: number;
    blog_sub_titles_id: string;
    site_tags_id: number;
    status: string;
    created_by: number | null;
    updated_by: number | null;
    created_at: string | null;
    updated_at: string | null;
    deleted_at: string | null;
    site_tags: SiteTags;
}

export interface BlogDetails {
    blogs_details_id: number;
    blog_sub_titles_id: string;
    blog_title: string;
    blog_description: string;
    status: string;
    featured_image: string;
    created_by: number;
    updated_by: number | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

export interface MainBlogDetail {
    id: number;
    division_id: string;
    division_name: string;
    country_id: string;
    profession_id: string;
    speciality_id: string;
    seniority_id: string;
    status: string;
    created_by: string;
    updated_by: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}


export interface SingleBlogData {
    id: number;
    blog_list_id: string;
    blog_titles: string;
    dead_line: string;
    content_writer: string;
    jd_writer_id: string;
    seo_user_id: string;
    status: string;
    published_date: string;
    created_by: string;
    updated_by: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    blogSeo: BlogSeo[];
    blogDetails: BlogDetails[];
    blogHistory: BlogDetails[];
    mainBlogDetails: MainBlogDetail[];
    blogTags: BlogTags[];
}
