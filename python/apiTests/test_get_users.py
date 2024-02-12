from support.http_requests import HTTP_JSON

def test_get_users(json_req):
    users=json_req.get(path='/users')
    assert users[0]['id'] != ""

# def test_post_user(base):
#     data = HTTP_JSON.post(base.url + '/users', {})