import pytest


# Arrange
@pytest.fixture
def get_string_shay():
    return "shay"


@pytest.fixture
def get_string_shay3():
    return "shay3"


@pytest.fixture()
def string_array(get_string_shay, get_string_shay3):
    return [get_string_shay, get_string_shay3]


@pytest.fixture(autouse=True)
def append_to_array(string_array):
    string_array.append("shay2")

def test_string_array(string_array):
    # Assert
    assert string_array == ["shay", "shay3", "shay2"]

