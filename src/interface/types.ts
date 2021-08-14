export interface Seriablizable {
  id: number;
  _serializer: string;
}

export interface UserSeri extends Seriablizable {
  type: string;
  login: string;
  name: string;
  description: string;
  avatar_url: string;
  followers_count: number;
  following_count: number;
  created_at: Date;
  updated_at: Date;
}

export interface DocSeri extends Seriablizable {
  slug: string;
  title: string;
  description: null;
  user_id: number;
  book_id: number;
  format: string;
  public: number;
  status: number;
  view_status: number;
  read_status: number;
  likes_count: number;
  comments_count: number;
  content_updated_at: Date;
  created_at: string;
  updated_at: Date;
  published_at: Date;
  first_published_at: Date;
  draft_version: number;
  last_editor_id: number;
  word_count: number;
  cover: string;
  custom_description: string;
  last_editor: UserSeri;
  book: null;
}

export interface TagSeri extends Seriablizable {
  book_id: number;
  doc_id: number;
  title: string;
  user_id: number;
}
