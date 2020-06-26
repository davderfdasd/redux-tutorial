import React from "react";

const Sample = ({ loadingPost, loadingUser, post, user }) => {
    return (
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && "로딩중"}
                {!loadingPost && post && (
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr></hr>
            <h1>사용자목록</h1>
            {loadingUser && "로딩중"}
            {!loadingUser && user && (
                <ul>
                    {user.map((u) => (
                        <li key={u.id}>
                            {u.name} {u.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Sample;
