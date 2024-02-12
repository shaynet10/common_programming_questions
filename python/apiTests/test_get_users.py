from support import assertions

def test_get_users_should_have_status_code_200(json_req):
    status_code = json_req.get(path='/users').response.status_code
    assert status_code == 200

def test_get_users_should_have_status_ok(json_req):
    status_reason = json_req.get(path='/users').response.reason
    assert status_reason == 'OK'


def test_valid_ids(json_req):
    users = json_req.get(path='/users').users
    for user in users:
        assertions.assert_valid_id(user)


def test_the_same_results_for_the_same_call(json_req):
    data1 = json_req.get(path='/users?page=1').users
    data2 = json_req.get(path='/users?page=1').users
    assert data1 == data2



def test_get_users_should_have_first_user_with_id(json_req):
    users = json_req.get(path='/users').users
    assert users[0]['id'] != ""

def test_that_every_name_appear_once(json_req):
    users = json_req.get(path='/users').users
    names = set()
    for user in users:
        if user['first_name'] != '':
            is_in_set = user['first_name'] in names
            assert is_in_set == False, user['first_name'] + ' exists twice in ' + str(users)
            names.add(user['first_name'])


def test_get_no_empty_name(json_req):
    users = json_req.get(path='/users').users
    for user in users:
        assertions.assert_no_empty_first_name(user)


# def test_post_user(json_req):
#     user =  json.dumps({
#         "id": "3",
#         "name": "shay"
#     })
#     json_req.post(path='/users', data=user)
