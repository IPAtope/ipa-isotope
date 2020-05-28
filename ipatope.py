#!/usr/bin/env python3

from jinja2 import Environment, FileSystemLoader, BaseLoader, DebugUndefined
from pathlib import Path
import yaml


DATA = Path('./data')

jinja_env = Environment(loader=FileSystemLoader('templates'),
                        # extensions=['jinja2_markdown.MarkdownExtension'],
                        undefined=DebugUndefined)



class AttrObject:
    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)


with (DATA / 'phonemes.yaml').open('r') as fp:
    phonemes = [AttrObject(**ph)
                for ph in yaml.load(fp, Loader=yaml.Loader)]

with (DATA / 'filters.yaml').open('r') as fp:
    fgrps = {grp: [AttrObject(**fil) for fil in fils]
                   for grp, fils in yaml.load(fp, Loader=yaml.Loader).items()}

with (DATA / 'sorters.yaml').open('r') as fp:
    sorters = [AttrObject(**sor)
             for sor in yaml.load(fp, Loader=yaml.Loader)]

data = dict(
    phonemes=phonemes,
    filtergroups=fgrps,
    sorters=sorters,
)

template = jinja_env.get_template('phonemes.template.html')
with Path('index.html').open('w') as out:
    out.write(template.render(**data))

code = jinja_env.get_template('ipatope.template.js')
with Path('ipatope.js').open('w') as out:
    out.write(code.render(**data))
