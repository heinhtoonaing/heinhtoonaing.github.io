import time
import curses

def countdown(stdscr, minutes):
    curses.curs_set(0)
    stdscr.nodelay(1)
    stdscr.timeout(1000)

    seconds = minutes * 60
    while seconds:
        mins, secs = divmod(seconds, 60)
        timer = '{:02}:{:02}'.format(mins, secs)
        stdscr.clear()
        height, width = stdscr.getmaxyx()
        x = width//2 - len(timer)//2
        y = height//2
        stdscr.addstr(y, x, timer)
        stdscr.refresh()
        time.sleep(1)
        seconds -= 1

    stdscr.clear()
    stdscr.addstr(height//2, width//2 - len("TIME'S UP!")//2, "TIME'S UP!")
    stdscr.refresh()
    stdscr.getch()

if __name__ == "__main__":
    curses.wrapper(countdown, 8)  # countdown from 8 minutes
