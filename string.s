##
# This code contains strnlen, strncopy, and a convert procedures. The user 
#   will be prompted to input a string, and all of these procedures will be 
#   called in order, and the results will be printed.
#
# Author: Tyler Allen, Trevor Griggs
# Date: 03/04/2014
##


.data

# Holds the original string.
input:   .space 256

# Holds copy of the string and later the lowercased string.
copy:    .space 256

# Part of the structured output.
prompt:  .asciiz "Please enter a string > "

# Part of the structured output. 
length:  .asciiz "The length of the string \""

# Part of the structured output. 
is:      .asciiz "\" is: "

# Part of the structured output.
new_str: .asciiz "The new String is: "

# Part of the structured output.
endl:    .asciiz "\n"

# Part of the structured output. 
let_con: .asciiz " letters were converted:\n"


.text

##
# This procedure calls the strnlen, strncopy, and convert procedures. The user 
#   will be prompted to input a string, and all of these procedures will be 
#   called in order, and the results will be printed.
#
# Register Legend:
# t0: used to store the return value of the length call
# t1: used to store the index of the newline character in input string
# t2: used to store the return value of the convert call
##

main:
    # prompt for string
    li $v0, 4
    la $a0, prompt
    syscall

    # load string into space
    li $v0, 8
    la $a0, input
    li $a1, 256
    syscall

#############################
#          strlen           #
#############################

    # load strlen arguments, string to count on and size of buffer
    la $a0, input
    li $a1, 256
    jal strlen
    
    # store return value length from strlen
    move $t0, $v0
    
    # remove extra count
    sub $t0, $t0, 1

    # acquire index of newline character
    la   $t1, input
    add  $t1, $t1, $t0

    # change newline to null
    sb $0, 0($t1)

    # length is print
    li $v0, 4
    la $a0, length
    syscall

    # user input string print
    li $v0, 4
    la $a0, input
    syscall

    # is print
    li $v0, 4
    la $a0, is
    syscall

    # length print
    li $v0, 1
    move $a0, $t0
    syscall
    
    # trailing newline
    li $v0, 4
    la $a0, endl
    syscall

#############################
#          strcpy           #
#############################

    # destination arg
    la $a0, copy
    # source arg
    la $a1, input
    # buffer size
    li $a2, 256
    # call to strncpy
    jal strncpy
    
	# the new string is print
    li $v0, 4
    la $a0, new_str
    syscall

	# copy print
    li $v0, 4
    la $a0, copy
    syscall

	# trailing newline
    li $v0, 4
    la $a0, endl
    syscall

#############################
#          convert          #
#############################

    # source arg
    la $a0, copy
    # buffer size
    li $a1, 256
    # call to convert
    jal convert

    # store return value from convert
    move $t2, $v0
    
	# number of converted letters print 
    li $v0, 1
    move $a0, $t2
    syscall

	# letters were converted print
    li $v0, 4
    la $a0, let_con
    syscall

	# lower cased string print
    li $v0, 4
    la $a0, copy
    syscall

	# trailing newline
    li $v0, 4
    la $a0, endl
    syscall

# hasta la vista, baby
li $v0, 10
syscall



##
# This procedure counts the number of characters in the given string.
#
# Register Legend for strlen:
# t0: address of input string
# t1: running address of current string index
# t2: counter for string length
# t3: holds max length of string
# t4: individual character of string from s1
#
# ARGS:
# a0: the string to count the size of 
# a1: The size of the buffer containing the string
#
# RETURN:
# v0: the size of the string, or $a1 if string is too large
##

strlen:
    # load address of string into register
    move $t0, $a0
    # length counter, start at -1 to account for null character
    li $t2, -1
    # store buffer size
    move $t3, $a1

    # loop sub procedure
    strlen_loop:
        blt $t3, $t2, exit_strlen_loop # $3, $2
	    # add 1 to accumulator
	    addi $t2, $t2, 1
	    # accumulate offset
	    add $t1, $t0, $t2
	    # load char
	    lb  $t4, 0($t1)
	    # check if equal to newline
	    bne $t4, $0, strlen_loop
    exit_strlen_loop:
        #return len
	    move $v0, $t2
# later dude
jr $ra



##
# This procedure copies the given string and then prints out the copy.
#
# Register Legend for strncpy:
# t0: destination string from args
# t1: source string from args
# t2: size of string from args
# t3: counter for size
# t4: mutable dest pointer
# t5: mutable src pointer
# t6: storage for character in transition
#
# ARGS:
# a0: destination string
# a1: source string
# a2: size string
##

strncpy:
    # move args into registers
    move $t0, $a0
    move $t1, $a1
    move $t2, $a2
    move $t3, $0
    move $t4, $t0
    move $t5, $t1

    strncpy_loop:
        # check we're under the buffer size
        beq $t3, $t2, exit_strncpy_loop 
	    # find current pointer positions
	    add $t4, $t0, $t3
	    add $t5, $t1, $t3

	    # load from source and place in dest
	    lb $t6, 0($t5)
	    sb $t6, 0($t4)
	    #accumulate
	    addi $t3, $t3, 1
        bne $t4, $0, strncpy_loop
    exit_strncpy_loop:
jr $ra



##
# This procedure converts the string to lowercase and prints the lowercase 
#   string.
#
# Register Legend for convert:
# t0: address of starting string
# t1: individual character of string
# t2: counter for number of letters converted
# t3: max size of string
# t4: counter for size
#
# ARGS:
# a0: destination string
# a1: size string
#
# RETURN:
# v0: number of letters converted
##

convert:
    # move args into registers
    move $t0, $a0
	# initialize converted counter
	li $t2, 0
	# store buffer size
	move $t3, $a1
	# counter of size
	li $t4, 0

	convert_loop:
		# check we're under the buffer size
		beq $t4, $t3, exit_convert_loop
		# load char
		lb $t1, 0($t0)
		# if: checks for less than the first uppercase letter
		blt $t1, 65, skip
		# if: checks for greater than the last uppercase letter
		bgt $t1, 90, skip
		# adds 32 to the value to get it's lowercase equivalent
		addi $t1, $t1, 32
		# stores the byte in the string
		sb $t1, 0($t0)
		# increments the number of letters converted
		addi $t2, $t2, 1

	skip:
		# increment string
		addi $t0, $t0, 1
		# increment counter for size
		addi $t4, $t4, 1
		# check if the element is 0
		bne $t1, $0, convert_loop

	exit_convert_loop:
		# return converted
		move $v0, $t2
jr $ra
