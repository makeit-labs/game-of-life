from rule_engine import try_center

def test_all_neighbors_are_dead_for_a_living_cell():
    cell_group = [[False, False, False],
                  [False, True, False],
                  [False, False, False]]

    assert not try_center(cell_group)

def test_2_neighbors_are_alive_for_a_living_cell():
    cell_group = [[False, False, False],
                  [False, True, True],
                  [False, False, True]]

    assert try_center(cell_group)

    cell_group_2 = [[False, False, True],
                  [False, True, False],
                  [False, True, False]]

    assert try_center(cell_group_2)

def test_1_neighbors_are_alive_for_a_living_cell():
    cell_group = [[False, False, False],
                  [False, True, True],
                  [False, False, False]]

    assert not try_center(cell_group)
