

// types.d.ts

export interface Category {
    id: string;
    name: string;
    // Add other fields if necessary
  }
  
  export interface CategoryData {
    id: string;
    name: string;
    division_desc: string;
    // Add other fields if necessary
  }
  

// Fetch the list of categories
export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(`${process.env.API_URL}/categories`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

// Fetch data for a specific category
export async function fetchCategoryData(categoryId: string): Promise<CategoryData | null> {
  const res = await fetch(`${process.env.API_URL}/categories/${categoryId}`);
  if (!res.ok) throw new Error('Failed to fetch category data');
  return res.json();
}
