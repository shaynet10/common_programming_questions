import pytest

@pytest.fixture(scope="module")
def int_array():
    return [1,2,3,4,5,6,7,8,9,10]