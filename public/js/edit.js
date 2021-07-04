const editBlog = async (event) => {
    let currentPath = window.location.pathname;
    let pathComponents = currentPath.split('/');
    blogID = pathComponents[2]

    var editTitleBlog = document.querySelector('#editTitleBlog').value;
    var editDesciptionBlog = document.querySelector('#editDesciptionBlog').value;

    if (commentBlog) {
        await fetch(`/api/blogs/${blogID}`, {
            method: 'PUT',
            body: JSON.stringify({ editTitleBlog, editDesciptionBlog }),
            headers: { 'Content-Type': 'application/json' },
        });
    }
    document.location.replace(`/blog/${blogID}`);
};

document
    .querySelector('.edit-form')
    .addEventListener('submit', editBlog);


const deleteBlog = async (event) => {

    let currentPath = window.location.pathname;
    let pathComponents = currentPath.split('/');
    blogID = pathComponents[2]

    if (blogID) {
        await fetch(`/api/blogs/${blogID}`, {
            method: 'DELETE',
        });
        console.log("completed")
    }
    window.location.assign('/');
};

document
    .querySelector('#delete')
    .addEventListener('click', deleteBlog);