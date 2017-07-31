def try_center(cell_group):
    if cell_group[1][2] and cell_group[2][2]:
        return True
    if cell_group[0][2] and cell_group[2][1]:
        return True
    return False
