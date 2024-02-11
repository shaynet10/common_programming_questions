def test_int_array(int_array):
    assert int_array == [1,2,3,4,5,6,7,8,9,10]

def test_append_to_iny_array(int_array):
    int_array.append(11)
    assert int_array == [1,2,3,4,5,6,7,8,9,10,11]