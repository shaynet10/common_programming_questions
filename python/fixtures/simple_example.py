import pytest


# Arrange
@pytest.fixture
def get_string_shay():
    return "shay"


@pytest.fixture
def get_string_shay3():
    return "shay3"


@pytest.fixture
def string_array(get_string_shay, get_string_shay3):
    return [get_string_shay, get_string_shay, get_string_shay3]


def test_string_array(string_array):
    # Act
    string_array.append("shay2")

    # Assert
    assert string_array == ["shay","shay", "shay3", "shay2"]


def test_string_array2(string_array):
    string_array += ["hi","how", "are", "you"]

    # Assert
    assert string_array == ["shay", "shay", "shay3", "hi", "how", "are", "you"]