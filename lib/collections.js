Posts = new Meteor.Collection('posts');
Comments = new Meteor.Collection('comments');
Authors =  new Meteor.Collection('authors');

Authors.attachSchema(new SimpleSchema({
  author: {
    type: String,
  },
}))
Comments.attachSchema(new SimpleSchema({
  comment: {
    type: String,
  },
  postId: {
    type: String,
    optional: true,
  },
}))
Posts.attachSchema(new SimpleSchema({
  post: {
    type: String,
  },
  authorId: {
    type: String,
    optional: true,
  },
}))