import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./firebase";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollRestoration";

import ReviewRepository from './Service/review_repository'
import CommentRepository from './Service/comment_repository';
import ImageUploader  from './Service/image_uploader'
import LikeRepository from './Service/like_repository';

import { AuthProvider } from "./components/context/AuthProvider";

const reviewRepository = new ReviewRepository();
const commentRepository = new CommentRepository();
const likeRepository = new LikeRepository();

const imageUploader = new ImageUploader();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <AuthProvider>
      <ScrollToTop/>
      <App reviewRepository={reviewRepository} 
        commentRepository={commentRepository}
        imageUploader={imageUploader}
        likeRepository={likeRepository}
        />
        </AuthProvider>
    </BrowserRouter>
);

