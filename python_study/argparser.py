import argparse

parser = argparse.ArgumentParser(description="Process some integer")

def myfunction(lst:list):
    lst = list(map(lambda x: x**2, lst))
    lst = sum(lst)
    return lst
parser.add_argument('integers', metavar='N', type=int, nargs='+', help='An integer for the accumulator')
parser.add_argument('--sum', dest='accumulate', action='store_const', const=sum, default=max, help='sum the integer')
parser.add_argument('--myFunc', dest='accumulate2', action='store_const', const=myfunction, help='Square sum')
args = parser.parse_args()

# print(args.accumulate(args.integers))
print(args.accumulate)
print(args.integers)
print(args.accumulate2)
print(args.accumulate2(list(args.integers)))
# print(args.accumulate2)