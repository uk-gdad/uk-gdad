# Publish the website subproject to its own sibling repository.
#
# Delegates to bin/make-github-pages rather than repeating the subtree
# command here, so there is one place that runs bin/check and refuses to
# push uncommitted changes. The underlying command is:
#
#   git subtree push --prefix=uk-gdad.github.io github-pages main
#
# See spec/monorepo-github-pages/index.md and AGENTS/website.md.

.PHONY: github-pages
github-pages:
	bin/make-github-pages
