export interface pepeBlogCard {
    _id: string; // Add _id to the interface
    title: string;
    currentSlug: string;
    mainImage?: { // Optional, as it might not exist
        asset?: {
            _id: string;
            url: string; // Include the URL for the image
        };
    };
    publishedAt: string;
    content: string;
}
