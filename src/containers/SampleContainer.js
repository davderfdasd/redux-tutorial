import React from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React;
const SampleCantainer = ({
    getPost,
    getUsers,
    post,
    user,
    loadingPost,
    loadingUser,
}) => {
    useEffect(
        () => {
            getPost(1);
            getUsers(1);
        },
        [getPost],
        [getUsers]
    );

    return (
        <Sample
            post={post}
            loadingPost={loadingPost}
            user={user}
            loadingUser={loadingUser}
        ></Sample>
    );
};

export default connect(
    ({ sample, loading }) => ({
        post: sample.post,
        user: sample.user,
        loadingPost: loading["sample/GET_POST"],
        loadingUser: loading["sample/GET_USER"],
    }),
    {
        getPost,
        getUsers,
    }
)(SampleCantainer);
