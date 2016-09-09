Meteor.publish('pac', function (query) {
 ReactiveAggregate(this, Posts, [
     {
        $lookup: 
        {
            from: "comments",
            localField: "_id",
            foreignField: "postId",
            as: "comments",
        },
     }, 
     // {
     //    $unwind: { path: "$comments", preserveNullAndEmptyArrays: true },
     // },
     {
        $lookup: 
        {
            from: "authors",
            localField: "authorId",
            foreignField: "_id",
            as: "author",
        },
     }, 
     {
        $unwind: { path: "$author", preserveNullAndEmptyArrays: true },
     },
     {
        $match: query,
     },
 ]);
});


Meteor.startup( function (){

    Posts.remove({});
    Comments.remove({});
    Authors.remove({});

    if(Posts.find().count() === 0 ) {

        var inserts_authors_ids = [];
        var inserts_authors = [
            {
                author: 'Rel A',
            },
            {
                author: 'Rel B',
            }
        ];

        for (var key in inserts_authors)
        {
            var obj = inserts_authors[key];
            var id = Authors.insert(obj);
            inserts_authors_ids.push(id);
        }



        var inserts = [
            {
                post:'Hello',
                authorId: inserts_authors_ids[0],
            },
            {
                post:'Hello',
                authorId: inserts_authors_ids[0],
            },
            {
                post:'Hello',
                authorId: inserts_authors_ids[0],
            },
            {
                post:'Hello',
                authorId: inserts_authors_ids[0],
            },
            {
                post:'Hello',
            },
            {
                post:'Hello',
            },
            {
                post:'Hello',
            },
            {
                post:'Hello',
                authorId: inserts_authors_ids[1],
            },
            {
                post:'Hello',
                authorId: inserts_authors_ids[1],
            },
            {
                post:'Hello',
                authorId: inserts_authors_ids[1],
            },
            {
                post:'Hello',
                authorId: inserts_authors_ids[1],
            },
            {
                post:'Hello',
                authorId: inserts_authors_ids[1],
            },
            {
                post:'Hello',
                authorId: inserts_authors_ids[1],
            },
            {
                post:'Hello',
                authorId: inserts_authors_ids[1],
            },
            {
                post:'Hello',
                authorId: inserts_authors_ids[1],
            },
        ]

        var inserts_posts_ids = [];

        _.each(inserts, function(doc) { 
          inserts_posts_ids.push(Posts.insert(doc));
        });


        var inserts_comments_ids = [];
        var inserts_comments = [
            {
                comment: 'CM A',
                postId: inserts_posts_ids[0],
            },
            {
                comment: 'CM B',
                postId: inserts_posts_ids[1],
            },
            {
                comment: 'CM C',
                postId: inserts_posts_ids[0],
            },
            {
                comment: 'CM D',
                postId: inserts_posts_ids[1],
            },
            {
                comment: 'CM E',
                postId: inserts_posts_ids[0],
            },
            {
                comment: 'CM F',
                postId: inserts_posts_ids[1],
            }
        ];

        for (var key in inserts_comments)
        {
            var obj = inserts_comments[key];
            var id = Comments.insert(obj);
            inserts_comments_ids.push(id);
        }

    }
});