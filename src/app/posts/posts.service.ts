import { Injectable } from '@angular/core';
import { IPost } from './post.interface';
import { GetPostsQuery } from './graphql/queries';
import { Subject } from 'rxjs/Subject';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { DeletePostInterface, UpdatePostInterface, PostsInterface } from './graphql/schema';
import { RemovePostMutation, UpdatePostMutation } from './graphql/mutations';

@Injectable()
export class PostsService {
    private posts: ApolloQueryObservable<PostsInterface>;
    private apollo: Apollo;

    constructor(apollo: Apollo) {
        this.apollo = apollo;
    }


}