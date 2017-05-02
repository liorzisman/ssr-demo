import React from 'react';
import { Header } from './Header';
import { PostsFeed } from './PostsFeed';

const posts = [
  { title: 'Regular', imageUrl: '/static/regular.png',
    description: 'A regular stack of pancakes with butter and syrup' },
  { title: 'Berries', imageUrl: '/static/berries.png',
    description: 'Pancakes served with berries.' },
  { title: 'Chocolate', imageUrl: '/static/chocolate.png',
    description: 'A stack of chocolate filled pancakes.' }
];

export class FeedApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PostsFeed posts={posts}/>
      </div>
    )
  }
}