from simplegit import Git
from logger import Logger

logger = Logger()
git = Git(logger=logger)


def get_current_branch():
    lines, _, _ = git.call("rev-parse", "--abbrev-ref HEAD")
    print lines
    return lines[0].strip()


def has_uncommitted_changes():
    """Return whether the current branch has uncommitted changes. Note that this is not
    technically the best possible way to do this, but it works for our purposes.
    """
    lines, _, _ = git.status("-s")
    return bool(len(lines))


def git_step(cmd, args_string):
    """Return a step function that returns true if the given git command and
    arg string e.g. 'push', 'origin master' returns nonzero exit code."""
    def step():
        _, rtncode, _ = git.call(cmd, args_string)
        return rtncode == 0
    return step


def exec_steps(*args):
    """Given step functions as args, executes them in order until one returns
    False.
    """
    for step in args:
        if not step():
            logger.fatal("Step did not return True." % command)
            return
    logger.success("All steps completed successfully.")


def main():
    logger.info("Checking current branch...")
    current_branch = get_current_branch()
    if current_branch != "master":
        logger.fatal("Must run this script from master. Currently on %s." % current_branch)
        return

    logger.info("Checking for uncommitted work...")
    if has_uncommitted_changes():
        logger.fatal("`git status -s` reports uncommitted work. Fix this to push.")
        return

    logger.info("Pushing...")
    exec_steps(
        git_step("checkout", "gh-pages"),
        git_step("merge", "master"),
        git_step("push", "origin gh-pages"),
        git_step("checkout", "master"),
    )

if __name__ == "__main__":
    main()
