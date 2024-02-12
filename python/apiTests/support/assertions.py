def assert_no_empty_first_name(obj):
    assert 'first_name' in obj, "Name doesn't exist"
    assert obj['first_name'] != '', str(obj['id']) + " has an empty name"


def assert_valid_id(obj):
    assert 'id' in obj, "id doesn't exist"
    assert isinstance(obj['id'], int), str(obj['id']) + " is not an str"
    assert obj['id'] >= 0, 'id < 0, which is not a valid id'


