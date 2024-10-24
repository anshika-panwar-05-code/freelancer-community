// src/pages/Forum.js
import React from 'react';
import { ChatBubbleLeftIcon, UserGroupIcon, DocumentTextIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const forumTopics = [
  {
    name: 'General Discussion',
    description:
      'Talk about anything and everything. Share your thoughts, questions, and ideas with the community.',
    icon: ChatBubbleLeftIcon,
  },
  {
    name: 'Community Events',
    description:
      'Stay updated on upcoming events, workshops, and meetups happening in our community.',
    icon: UserGroupIcon,
  },
  {
    name: 'Resources & Guides',
    description:
      'Access helpful resources, guides, and tutorials shared by members of the community.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Privacy & Security',
    description:
      'Discuss important topics around privacy and security within the forum and online in general.',
    icon: LockClosedIcon,
  },
];

const Forum = () => {
    return (
        <div className="bg-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header Section */}
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
                        Welcome to the Forum
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Engage with a community that shares your interests and knowledge. Collaborate and learn together.
                    </p>
                </div>

                {/* Forum Topics Section */}
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
                        {forumTopics.map((topic) => (
                            <div key={topic.name} className="relative pl-16">
                                {/* Icon container */}
                                <dt className="text-base font-semibold leading-7 text-gray-800">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <topic.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </div>
                                    {topic.name}
                                </dt>
                                {/* Topic Description */}
                                <dd className="mt-2 text-base leading-7 text-gray-600">{topic.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Forum;
